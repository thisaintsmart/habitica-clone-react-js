const CoinIcon: React.FC = () => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
      <g fill='none' fill-rule='evenodd'>
        <circle cx='12' cy='12' r='12' fill='#FFA623'></circle>
        <path
          fill='#FFF'
          d='M6.3 17.7c-3.1-3.1-3.1-8.2 0-11.3 3.1-3.1 8.2-3.1 11.3 0'
          opacity='.5'></path>
        <path
          fill='#FFF'
          d='M17.7 6.3c3.1 3.1 3.1 8.2 0 11.3-3.1 3.1-8.2 3.1-11.3 0'
          opacity='.25'></path>
        <path
          fill='#BF7D1A'
          d='M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8z'
          opacity='.5'></path>
        <path fill='#BF7D1A' d='M13 9v2h-2V9H9v6h2v-2h2v2h2V9z' opacity='.75'></path>
      </g>
    </svg>
  );
};

export default CoinIcon;
