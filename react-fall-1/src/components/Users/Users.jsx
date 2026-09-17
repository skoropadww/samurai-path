import React from 'react'
import s from './Users.module.css'

const Users = (props) => {
    if(props.users.length === 0) {
        props.setUsers([
                {id: 1, photoUrl: 'https://i.pravatar.cc/150?u=1', name: 'Vilat', status: 'I am a developer', location: {city: 'Odesa', country: 'Ukraine'}, followed: false},
                {id: 2, photoUrl: 'https://i.pravatar.cc/150?u=2', name: 'Lida', status: 'I am a designer', location: {city: 'Kyiv', country: 'Ukraine'}, followed: true},
                {id: 3, photoUrl: 'https://i.pravatar.cc/150?u=3', name: 'Pasha', status: 'I am a developer', location: {city: 'Kharkiv', country: 'Ukraine'}, followed: false},
                {id: 4, photoUrl: 'https://i.pravatar.cc/150?u=4', name: 'Vasia', status: 'I am a designer', location: {city: 'Lviv', country: 'Ukraine'}, followed: true},
                {id: 5, photoUrl: 'https://i.pravatar.cc/150?u=5', name: 'Dima', status: 'I am a developer', location: {city: 'Odessa', country: 'Ukraine'}, followed: false},

        ])
    }
    
  return (
    <div className={s.users}>
      <h1 className={s.title}>Users</h1>
      <div className={s.list}>
        {props.users.map((u) => (
          <div key={u.id} className={s.user_wrap}>
            <div className={s.user_left}>
              <div className={s.user_photo}>
                <img
                  src={u.photoUrl}
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
                  <span className={s.user_country}>{u.location.country}</span>
                  <span className={s.user_city}>{u.location.city}</span>
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
