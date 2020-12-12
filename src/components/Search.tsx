import React, { forwardRef, useEffect, useState } from 'react';
import { CheckIcon } from '@chakra-ui/icons';
import { Box, Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import { connectSearchBox } from 'react-instantsearch-dom';

interface Props {
  currentRefinement?: string;
  refinementBrand?: string;
  refine: (obj: any) => void;
}

const Search: React.ForwardRefRenderFunction<any, Props> = (
  { currentRefinement, refinementBrand, refine },
  myRef
) => {
  const [state, setState] = useState({
    name: currentRefinement,
  });
  const [showChild, setShowChild] = useState(false);

  // Wait until after client-side hydration shows it.
  useEffect(() => {
    setShowChild(true);
  }, []);

  const handleChange = (evt) => {
    const target = evt.target;

    setState({
      ...state,
      [target.name]: target.type === 'checkbox' ? target.checked : target.value,
    });
  };

  const handleSubmit = (objValues) => {
    refine(objValues.name);
  };

  return (
    <Box>
      <InputGroup>
        <Input
          ref={myRef}
          placeholder="Enter amount"
          defaultValue={currentRefinement}
          onChange={handleChange}
        />
        <InputRightElement>
          <CheckIcon color="green.500" />
        </InputRightElement>
      </InputGroup>
    </Box>
  );
};

const SearchWithRef = forwardRef(Search);

const ConnectedSearchBox = connectSearchBox(SearchWithRef);

export default ConnectedSearchBox;
