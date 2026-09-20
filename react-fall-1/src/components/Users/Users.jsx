import React from 'react'
import s from './Users.module.css'
import axios from 'axios'

class Users extends React.Component {
  constructor(props) {
    super(props)

    axios
      .get('/samurai-api/api/1.0/users', {
        withCredentials: true,
      })
      .then((response) => {
        this.props.setUsers(response.data.items)
      })

  }
  render() {
    return (
      <div className={s.users}>
        <h1 className={s.title}>Users</h1>
        <div className={s.list}>
          {this.props.users.map((u) => (
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
                    onClick={() => this.props.unfollow(u.id)}
                  >
                    Unfollow
                  </button>
                ) : (
                  <button
                    className={s.user_btn_follow}
                    onClick={() => this.props.follow(u.id)}
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
}

export default Users
