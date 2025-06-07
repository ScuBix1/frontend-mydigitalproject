interface CheckProps {
  className?: string;
}

const Check = (props: CheckProps) => {
  const { className } = props;

  return (
    <svg
      className={className}
      viewBox='0 0 29 28'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
    >
      <rect x='0.5' width='28' height='28' fill='url(#pattern0_1482_518)' />
      <defs>
        <pattern
          id='pattern0_1482_518'
          patternContentUnits='objectBoundingBox'
          width='1'
          height='1'
        >
          <use xlinkHref='#image0_1482_518' transform='scale(0.0111111)' />
        </pattern>
        <image
          id='image0_1482_518'
          width='90'
          height='90'
          preserveAspectRatio='none'
          xlinkHref='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFU0lEQVR4nO2dS2hkRRSGa8yoI+Nj49DGvuc/t073GMhGMLpSiYgPBhR1oYIvfCMoRB1kdCG4U2clAV0JrtyOj1mM6M6NoiOaGRBd+Fj4YHQyiSsnkKTldF+ZKJ1Mp7vqVt3b9cGB0OncW/VTqVvn1KlzjUkkEolEIpFIJBKJxMBM2Cy7xgKPWeKDFnhfwMcs+AcBn7KEFbXuz73Pjul3LPHr+jdCdLVeY/DbjRHtZjMT4meF+LAl/CXgzkhGWBbwh0I0tzfLmmacybLsghx4UMCfCHhtZHE3t1UBf2yBB5h5lxkXpvfsuVBHmoB/9ShuX7PAH5b4FRG5xNSVmZmZcwV4QcCLZQvcxxYt835tk6kTluh6Cz4egcD/n8u/s8BNpuronCjAmwJeDy7q5rZuiefb7fb5poowcy7A5xEI2RnELPFXrSxrmyqh/45OlmkofSpZFuBGUwWE+S4h/B1cNAw7srHSovxeEzMt4EnPa+JOSbaWA0+YGGllfGfhHIQWqeNMbKJ7TEzovGYJpyMQp+N6Gskpv8XEgDSbeyv54MOARlhuE7WCiqxrT10WBRcDnkc2+GjQdXbhjAQXQsoQm3g+mFsducfXcWzreZbPliryrDE7BViIoPOdUkc1+HipgagiChe84xJCbOLnSosnW/DJ0B2WcKP6pGrgXWgBDoTurIQWm3m//7An8W+hOyqhjfC7bsV5E7pF9FDwTiISY77Pm9DFRmr4TiK8WeCIv5SAGkTmbDcmgwPMfJma/lzkiWz3WqsAJp0L3c27qIPIzPv69O3FIUf1Mz6EPlxxkVcs0e39+matbQx5zUOudZ4QwlIdRVaI6PKhrk1Ycpp+prlwdZsuNmKJXxr2+i1gxriimzxYU5GFed9ImxYZP+JOaOKDdZsulDzLbx19IxmvGlcI+IPQwkmUIjt+IFYpJGrLmC42GuFrd0ITfg4toEQ2ks8IzT+6EzqODNBOdCL3wqZ/OhN6SBe19iJLMVXFKvSnQvyUuq8W/GXl5mSvQrvaUSG8a4zZ8Z+9R+K3qyqy86lDCD+5aBQz530uf84wYscgsoeHoZPl3dr09PR5m9xiW2JHI7Lr5V1x1s9Bw7BV7vFAYkclsmuHxZ0Lju+vmJy8dFixYxO52ybwa3EGlQjf6s7GFrfbIcBbMS3htu4PPxxxmBQL2xnZMY7kf60FXBV34J8GG9nRjmQfgX+le7baeWNx1pGd5/mVMY5kX1tZpjhW3AkgdpQid4UGnjauKfbV/JxRobNOI/FMF2dsdbttHhitEuCt4TS42BGI7C+BptvBXtmHTkix8whE9p4S1jvb7bn8A20udjQi+05yLC8JHQua1LLxvha4LZYjdpb4eeObqampi8rYcbGEEwK8rJ6XBd6JJe9Pw6KNRmO3KQNNxA7dYQllRHOmLHoBe3wTvNOo+WEhRYiuS8ffSkIPOY7RaH7DBD2iDD4aWgTxb19ssTtUkthEraKgX6eWRlgCYE0MtJhviMKRgFsrQrQ3m5hoUX5H3QqjWOBuEyNaHicWx0JGs1ULPG5iplvyp8LTiCWcjq7Ez2ZoWkElH5CEJX3emCqR5zkL4bNKVZmhwCV9RiwFNB+5B7muzkjwdbI7dx0RnhrQNuFaUydmjdmpRUU0zBha4G4biOa0TaauNBqN3dpJC/6ldIEJJ7RQd7vdvtiMC8y8ywL3C/CRZ0dH18RHdI9vrErP90OrBPROAOA9fRuFA3FP6bU078JbSkANmNB8Nsv8qGZqajaQ5iAXrwJZ3PB6kMXuZ/o7wiH9rp5iLXLh0utBEolEIpFIJBKJRMIMyD8PKVbeJMVzbAAAAABJRU5ErkJggg=='
        />
      </defs>
    </svg>
  );
};

export default Check;
