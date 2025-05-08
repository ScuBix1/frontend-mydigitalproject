export type HttpMethod = 'GET' | 'PATCH' | 'POST' | 'DELETE';

interface HttpRequestOptions<T = unknown> {
  url: string;
  method?: HttpMethod;
  data?: T;
  headers?: Record<string, string>;
  signal?: AbortSignal;
  timeOutMs?: number;
}

export interface HttpError {
  message: string;
  status?: number;
  body?: unknown;
}

interface HttpSuccess<T> {
  ok: true;
  data: T;
}

interface HttpFailure {
  ok: false;
  error: HttpError;
}

export type HttpSafeResponse<T> = HttpSuccess<T> | HttpFailure;

export async function httpRequest<TResponse = unknown, TRequest = unknown>(
  options: HttpRequestOptions<TRequest>
): Promise<HttpSafeResponse<TResponse>> {
  const {
    url,
    method = 'GET',
    data,
    headers,
    signal,
    timeOutMs = 10000,
  } = options;

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), timeOutMs);

  const fetchSignal = signal || controller.signal;

  const config: RequestInit = {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
    credentials: 'include',
    signal: fetchSignal,
    body: data ? JSON.stringify(data) : undefined,
  };

  try {
    const response = await fetch(url, config);
    clearTimeout(timeout);

    const contentType = response.headers.get('Content-Type') || '';
    const isJson = contentType.includes('application/json');
    const responseData = isJson
      ? await response.json().catch(() => undefined)
      : undefined;

    if (!response.ok) {
      return {
        ok: false,
        error: {
          message: (responseData.message as string) || "Erreur de l'api",
          status: response.status,
          body: responseData,
        },
      };
    }

    return { ok: true, data: responseData as TResponse };
  } catch (err: unknown) {
    clearTimeout(timeout);

    if (err instanceof DOMException && err.name === 'AbortError') {
      return {
        ok: false,
        error: {
          message: 'La requête a expiré !',
        },
      };
    }

    const message = err instanceof Error ? err.message : 'Erreur inconnue';
    return {
      ok: false,
      error: {
        message,
      },
    };
  }
}
