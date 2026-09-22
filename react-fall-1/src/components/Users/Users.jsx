import React from 'react'
import s from './Users.module.css'

const Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize) || 1
  let pages = []

  // показываем только «окно» из 10 страниц вокруг текущей
  const portionSize = 10
  let leftPage = Math.max(1, props.currentPage - Math.floor(portionSize / 2))
  let rightPage = leftPage + portionSize - 1

  if (rightPage > pagesCount) {
    rightPage = pagesCount
    leftPage = Math.max(1, rightPage - portionSize + 1)
  }

  for (let i = leftPage; i <= rightPage; i++) {
    pages.push(i)
  }

  return (
    <div className={s.users}>
      <h1 className={s.title}>Users</h1>
      <div className={s.pagination}>
        {props.currentPage > 1 && (
          <span
            className={s.pageNav}
            onClick={() => props.onPageChanged(props.currentPage - 1)}
          >
            ←
          </span>
        )}

        {leftPage > 1 && (
          <>
            <span
              className={props.currentPage === 1 ? s.selectedPage : ''}
              onClick={() => props.onPageChanged(1)}
            >
              1
            </span>
            {leftPage > 2 && <span className={s.pageDots}>...</span>}
          </>
        )}

        {pages.map((p) => (
          <span
            key={p}
            className={props.currentPage === p ? s.selectedPage : ''}
            onClick={() => props.onPageChanged(p)}
          >
            {p}
          </span>
        ))}

        {rightPage < pagesCount && (
          <>
            {rightPage < pagesCount - 1 && <span className={s.pageDots}>...</span>}
            <span
              className={props.currentPage === pagesCount ? s.selectedPage : ''}
              onClick={() => props.onPageChanged(pagesCount)}
            >
              {pagesCount}
            </span>
          </>
        )}

        {props.currentPage < pagesCount && (
          <span
            className={s.pageNav}
            onClick={() => props.onPageChanged(props.currentPage + 1)}
          >
            →
          </span>
        )}
      </div>
      <div className={s.list}>
        {props.users.map((u) => (
          <div key={u.id} className={s.user_wrap}>
            <div className={s.user_left}>
              <div className={s.user_photo}>
                <img
                  src={
                    u.photos.small != null
                      ? u.photos.small
                      : 'https://i.pravatar.cc/150?u=' + u.id
                  }
                  alt={u.name}
                />
              </div>
              {u.followed ? (
                <button
                  className={s.user_btn_follow}
                  onClick={() => props.unfollow(u.id)}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  className={s.user_btn_follow}
                  onClick={() => props.follow(u.id)}
                >
                  Follow
                </button>
              )}
            </div>

            <div className={s.user_right}>
              <div className={s.user_right_top}>
                <span className={s.user_name}>{u.name}</span>
                <div className={s.user_location}>
                  <span className={s.user_country}>{'country'}</span>
                  <span className={s.user_city}>{'city'}</span>
                </div>
              </div>
              <div className={s.user_status}>{u.status}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Users
