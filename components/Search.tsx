import style from '../styles/search.module.scss'

export default function Search() {
  return (
    <div className={style.search}>
      <div className={`${style['search__input-container']}`}>
        <input type='text' placeholder='Search' />
      </div>
    </div>
  )
}
