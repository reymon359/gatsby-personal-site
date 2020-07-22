import React, {useState} from 'react';
import {useStaticQuery, graphql} from 'gatsby';
// @ts-ignore
import {useFlexSearch} from 'react-use-flexsearch';
import * as queryString from 'query-string';

import PostsList from './PostsList';

interface SimplifiedPost {
  id: string;
  date: string;
  slug: string;
  tags: string[];
  title: string;
  thumbnail: string;
}

interface SearchProps {
  readonly posts: SimplifiedPost[];
  readonly location: Location;
  readonly navigate: any;
}

const Search: React.FC<SearchProps> = ({posts, location, navigate}) => {
  const {search} = queryString.parse(location.search);
  const [query, setQuery] = useState(search || '');
  const {localSearchPages} = useStaticQuery(graphql`
    query {
      localSearchPages {
        index
        store
      }
    }
  `);

  const results = useFlexSearch(
    query,
    localSearchPages.index,
    JSON.parse(localSearchPages.store)
  );

  return (
    <>
      <input
        id="search"
        type="search"
        placeholder="Search all posts..."
        value={query}
        onChange={e => {
          navigate(e.target.value ? `/blog/?search=${e.target.value}` : '');
          setQuery(e.target.value);
        }}
      />
      <section>
        {query ? (
          results.length > 0 ? (
            <Posts data={results} tags />
          ) : (
            <p>Sorry, nothing matched that search.</p>
          )
        ) : (
          <Posts data={posts} tags />
        )}
      </section>
    </>
  );
};
export default Search;
