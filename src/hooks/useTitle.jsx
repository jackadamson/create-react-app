import { useContext, useEffect } from 'react';

import { TitleContext } from '../contexts';

const useTitle = (title) => {
  const { setTitle } = useContext(TitleContext);
  useEffect(() => {
    setTitle(title);
    document.title = title;
  }, [title, setTitle]);
};

export default useTitle;
