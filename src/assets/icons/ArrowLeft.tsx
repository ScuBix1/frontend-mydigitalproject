interface ArrowLeftProps {
  className?: string;
}

const ArrowLeft = (props: ArrowLeftProps) => {
  const { className } = props;

  return (
    <svg
      viewBox='0 0 90 91'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      className={className}
    >
      <rect y='0.5' width='90' height='90' fill='url(#pattern0_986_392)' />
      <defs>
        <pattern
          id='pattern0_986_392'
          patternContentUnits='objectBoundingBox'
          width='1'
          height='1'
        >
          <use xlinkHref='#image0_986_392' transform='scale(0.0111111)' />
        </pattern>
        <image
          id='image0_986_392'
          width='90'
          height='90'
          preserveAspectRatio='none'
          xlinkHref='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAADA0lEQVR4nO3dy2oUQRQG4G4hJtJC1+mkTgcdaJI6oxAhKgEfQTfRx3ChCwMuBHeCLyAi7n0GFwH3ZpXgDRFRshHFoIgLJRsTmZkYonPtsfp0z+T/oHaZ6tShM3/1VE0lCAAAAAAAAPIQmcz18zAgkUlid5OsvCCWX8SySyxvDbvbtVrt2KDdQA+G5xaNlVd7xW1v1m3G6am5Xn1Ab2HMskLWbXct8n5z7+I4M336g39Zm80altX+BT54Z8vdto6gO5PKMlm3lavIrbeQ9z26hT8aoUbsHhDLTu4i77Usy6b2O4R2xtbP9gy8we7o7SBYmujQPQS5Aq9vW0dFO4jSeSZ2jz0UuNmMddc7XedQM8MGXtciy8tgYeFo2eMaq8Cj9jn0sySRWtljqwxK3Rmy8txfgZvtUZouRmWPrSpCYnfVWPnhrcDWbZlULpc9sLENPGqF3pPp6dMnyh5bZZB1lwy7jx7v4m2ycisIgiNlj60SsiybInb3fAaese51bOvnyh5bZRACTy3wfiLwChIh8IpHCLxiZQi84hECr3AhAq9gEQJPK/DkE57wCoLAU4DAK15oWG54WsPbxUeaHSDwFCDwCobAU9rfRuw2PK5+7DQWXrGN9i9LE16LbJtreMsaN8hIaWw28bb6wbLa+Osoe0yVZKxb87GGF7OsNKaEZY+nsgy771jDU0As3/670DNyXuN3HWnGylO8dSgwVq4hDNWmd7KO6Z0CPLCMwyP4DIKyo8TKReyTU4KPScdhLzO7K8rjGA1YylKEoFSWICj1RNhAoypEUCoibHLUk+GJUleCoNQTIShVhQhKRYSg1JMhKHUlCEo9EYJSVYigVEQIypE/6mcD53doHV7F7g22C/s8f7T3ktmdbteCwGNQWreJna1aQUnzcb9rHXo1D0HJPJce+kIW/kRp5fPAF4Hhg9JY93Dv5VDYSbzWfU2S+sm8F4B8/0zhS5LWLxx8DQxtaaL1HfXmzKQZlobdB2K5f3xW7PD9QleNQ18xjQMAAAAACCrtNym44vqaIvhzAAAAAElFTkSuQmCC'
        />
      </defs>
    </svg>
  );
};

export default ArrowLeft;
