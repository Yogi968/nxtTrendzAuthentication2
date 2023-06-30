import {BsSearch} from 'react-icons/bs'
import './index.css'

const FiltersGroup = props => {
  const renderRatingsFiltersList = () => {
    const {ratingsList} = props
    return ratingsList.map(rating => {
      const {changeRating, activeRatingId} = props
      const onChangeRating = () => changeRating(rating.ratingId)
      const isActive = rating.ratingId === activeRatingId
      const ratingClassName = isActive ? 'and-up active-rating' : 'and-up'
      return (
        <li
          className="rating-item"
          key={rating.ratingId}
          onClick={onChangeRating}
        >
          <img
            src={rating.imageUrl}
            alt={`rating ${rating.ratingId}`}
            className="rating-img"
          />
          <p className={ratingClassName}>&up</p>
        </li>
      )
    })
  }

  const renderRatingsFilters = () => (
    <>
      <h1 className="ratings-main-heading">Rating</h1>
      <ul className="ratings-list-container">{renderRatingsFiltersList()}</ul>
    </>
  )

  const renderCategoryFiltersList = () => {
    const {categoryOptions} = props
    return categoryOptions.map(category => {
      const {changeCategory, activeCategoryId} = props
      const onClickCategory = () => changeCategory(category.categoryId)
      const isActive = category.categoryId === activeCategoryId
      const categoryClassName = isActive
        ? 'category-name active-category-name'
        : 'category-name'
      return (
        <li
          className="category-item"
          key={category.categoryId}
          onClick={onClickCategory}
        >
          <p className={categoryClassName}>{category.name}</p>
        </li>
      )
    })
  }

  const renderCategoryFilters = () => (
    <>
      <h1 className="category-main-heading">Category</h1>
      <ul className="category-list-container">{renderCategoryFiltersList()}</ul>
    </>
  )

  const onEnterSearchInput = event => {
    const {onEnterInput} = props
    if (event.key === 'Enter') {
      onEnterInput()
    }
  }

  const onChangeSearchInput = event => {
    const {changeSearchInput} = props
    changeSearchInput(event.target.value)
  }

  const renderSearchInput = () => {
    const {searchInput} = props
    return (
      <div className="search-input-container">
        <input
          type="search"
          className="input-field"
          placeholder="search"
          value={searchInput}
          onChange={onChangeSearchInput}
          onKeyDown={onEnterSearchInput}
        />
        <BsSearch className="search-icon" />
      </div>
    )
  }

  const {clearFilters} = props
  return (
    <div className="filters-group-container">
      {renderSearchInput()}
      {renderCategoryFilters()}
      {renderRatingsFilters()}
      <button
        type="button"
        className="clear-filters-btn"
        onClick={clearFilters}
      >
        clear Filters
      </button>
    </div>
  )
}
export default FiltersGroup
