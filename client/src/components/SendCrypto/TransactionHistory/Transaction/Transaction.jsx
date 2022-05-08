import { useState, useEffect } from 'react';
import { TransactionContainer } from './TransactionStyles';

const Transaction = (props) => {
  const MAX_CHARACTERS = 70;

  const [imageSource, setImageSource] = useState(null);

  useEffect(() => {
    if (!props.keyword) {
      return;
    }

    const fetchGif = async () => {
      try {
        const response = await fetch(
          `https://api.giphy.com/v1/gifs/search?api_key=${
            process.env.REACT_APP_GIPHY_API_KEY
          }&q=${props.keyword.replace(/\s/g, '')}&limit=1`
        );
        const { data } = await response.json();
        setImageSource(data[0].images.downsized_medium.url);
      } catch (error) {}
    };
    fetchGif();
  }, [props.keyword]);

  return (
    <TransactionContainer as={props.as}>
      <div>{imageSource && <img src={imageSource} alt={props.keyword} />}</div>
      <p>
        {props.content?.length >= MAX_CHARACTERS
          ? props.content.slice(0, MAX_CHARACTERS - 3) + '...'
          : props.content}
      </p>
    </TransactionContainer>
  );
};

export default Transaction;
