import React from 'react';
import {
  RefinementList,
  SearchBox,
  Hits,
  Configure,
  Pagination,
  InstantSearch,
} from 'react-instantsearch-dom';

import Hit from './Hit';

const SearchApp: React.FC = ({
  searchState,
  resultsState,
  onSearchStateChange,
  createURL,
  indexName,
  searchClient,
  onSearchParameters,
  ...rest
}) => {
  return (
    <InstantSearch
      searchClient={searchClient}
      resultsState={resultsState}
      onSearchStateChange={onSearchStateChange}
      searchState={searchState}
      createURL={createURL}
      indexName={indexName}
      onSearchParameters={onSearchParameters}
      {...rest}
    >
      <Configure hitsPerPage={12} />
      <header>
        <h1>React InstantSearch + Next.Js</h1>
        <SearchBox />
      </header>
      <main>
        <div className="menu">
          <RefinementList attribute="categories" />
        </div>
        <div className="results">
          <Hits hitComponent={Hit} />
        </div>
      </main>
      <footer>
        <Pagination />
        <div>
          See{' '}
          <a href="https://github.com/algolia/react-instantsearch/tree/master/examples/next">
            source code
          </a>{' '}
          on github
        </div>
      </footer>
    </InstantSearch>
  );
};

export default SearchApp;
