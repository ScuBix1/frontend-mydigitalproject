interface CrossProps {
  className?: string;
}

const Cross = (props: CrossProps) => {
  const { className } = props;

  return (
    <svg
      className={className}
      viewBox='0 0 29 28'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
    >
      <rect x='0.5' width='28' height='28' fill='url(#pattern0_1482_519)' />
      <defs>
        <pattern
          id='pattern0_1482_519'
          patternContentUnits='objectBoundingBox'
          width='1'
          height='1'
        >
          <use xlinkHref='#image0_1482_519' transform='scale(0.0111111)' />
        </pattern>
        <image
          id='image0_1482_519'
          width='90'
          height='90'
          preserveAspectRatio='none'
          xlinkHref='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFN0lEQVR4nO1dS28cRRBuyQGCguAUbcBTX03Xbi4+YjgBMkI8lAMCDoDEQ+J9IZKBCBlu3ICckCX+RnjkEAQ/AISCgOTCBcSB8Ixjc8KWEg+q8Siy4kfW3urumd3+pJJG63VP9bc11d3V1TXOZWRkZGRkZGRkZGRkZAyNKV8Ud3vgZU980gOfCvicB/8s4EuesKZSX298dk6/44k/1P8Roru0jeFvN0EYTE8XQvyGEJ/2hH8FXI0khBUBfy5E80eLYtpNMoqiuLkEnhfwVwK+MjK5O8tlAX/pgeeY+aCbFMwcPnyLWpqALwQkd1vxwN+e+D0Ruc2NK2ZnZ28Q4G0BL8UmeBtZ8swnVCc3TvBE93nw+RYQfK0v/8kDD7quQ32iAB8LeD05qTvLuideHAwGN7kugplLAb5pAZHVMOKJv+sXxcB1Cfo4mkzTEN2VrAjwgOsChPkJIfyXnDTs17Kx1qfyaddm9IHXAs+Jq0hypQRedW1Ev+DHm8VBapIqM7KJnnJtgvo1T1htATmVtRspqXzYtQEyPX20kwMfhhTCyoCon5RknXvqtCg5GQhs2eCzSefZzWIkORESg2zixWTL6pav+CpjWS+Lci4qyXPOHRDgxxZ0vopq1eDzUQNRTRQuecclBdnEb0aLJ3vwxdQdlnRWfVE5CE60AAupOyupyWY+EXz7SQh/mihLusGKBWY+oqLXlouejba2tL9m0j7x70G3xZo9PiPLwMK17QvzMQuy6zaYj21pn/gdsx8SeDYY0c1GqomizHxku3uURfnIKNG/jXQEenS7tr33PUOizwQhWbftLYNGvAPRo5C9G8kKIrrDMugUJJWhzruwU7LSx3jX++3RjezkLjbDE79r2QcPHA9B9GlTJen6xAxLtmVbeyT6E2uep4SwbGrRuP6jPowbsWhj/08llk3TzzQXzlxJjG6NqSx5s/SBWTuigVdCKSr7tMqklrxZCn7Rjmjik0GVxd6Iaw3JteB9M6IF/Fl4hXloV5DaXQQbEGOGRP0QZLeF5FoI39sRTfg1muIYzo2kdRebieZf7IhOkAHq90h2EpI3wqb/mBFtFvVCGLJTkdzouJqJRseIzq6D47iOPBhyrMEwT+8kxvSuOesXxd9J1xYshFN2ROcleBVlCV6fSA1rFWudDSoRv2BHdA6TVjsR3QfuNCM6B/45TuBfUZ+tTjDw+TZvZVkOhFcV3ThWXIXM6wi9OWuZ11HfE3jdWaPZqu90uoE3zOtQLnbrw0jQKgFdTqAhw7yOYAk0Ci3FEDKvQwKnhJnmdTA/EzrJ8Q8TiyCsKdkAblfRa/Mkx63tW4V7LwSv/THJSehy9Ufkt1xo9Hq9QxoanFiSESkRXaGJ2Kk7LKmEaN5FPSxE+GECrfl89Ko1QnRvPv4WCXrIcYKs+SOX9Igy+GxqEiS8fDszM3NjMqJrson6TUG/aiyFsAzAuzagz3x/l6vOyO7L+Ydcm9Cn8rFxK4zigSddG6Hlccak1M9lzQl3bUZd8qfDbsQTVltX4me30j+dHCAJyzreuC6hLEsWwtedqjJDiUv6jFgKaLHlK8h1XYwknyfbLdfRwkIqqhPuceOEOecOaFGRNoRYax2I5lUnN67o9XqHtJMe/Ft0ggl/aaHuwWBwq5sUMPNBLcUgwBeBFzo6Jz6je3wTVXp+O+ienh5g16Nk+jYKA3IvaVuadxEsJWAMMKX5bJ75JQ/+QLOBNAe5eRXI0qbXgyzVn+nfCKf0u3qKtcmFy68HycjIyMjIyMjIyMjIcEPif3KKuTs13mVCAAAAAElFTkSuQmCC'
        />
      </defs>
    </svg>
  );
};

export default Cross;
