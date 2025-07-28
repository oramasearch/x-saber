import { SearchInput, SearchRoot } from '@orama/ui/components'
import { collectionManager } from '../OramaClient'

export const Search = () => {
  return (
    <SearchRoot client={collectionManager}>
      <SearchInput.Wrapper className='relative flex-shrink-0'>
        <SearchInput.Input
          type='text'
          placeholder='Search for anything...'
          ariaLabel='Search for products'
          className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-colors`}
        />
      </SearchInput.Wrapper>
    </SearchRoot>
  )
}
