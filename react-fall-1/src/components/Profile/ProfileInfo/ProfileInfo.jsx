import React from 'react'
import classes from './ProfileInfo.module.css'

const ProfileInfo = (props) => {
  if(!props.profile) {
    return <Preloader />
  }
  const { profile } = props
  const contacts = profile.contacts || {}

  return (
    <div className={classes.info}>
      <div className={classes.avatar}>
        <img
          src={
            profile.photos?.large ||
            profile.photos?.small ||
            'https://i.pravatar.cc/150?u=' + profile.userId
          }
          alt={profile.fullName}
        />
      </div>

      <div className={classes.description}>
        <div className={classes.name}>
          <h3>{profile.fullName}</h3>
        </div>

        <div className={classes.details}>
          <ul>
            <li>
              <span className={classes.label}>User ID:</span> {profile.userId}
            </li>
            <li>
              <span className={classes.label}>About me:</span>{' '}
              {profile.aboutMe || '—'}
            </li>
            <li>
              <span className={classes.label}>Looking for a job:</span>{' '}
              {profile.lookingForAJob ? 'Yes' : 'No'}
            </li>
            <li>
              <span className={classes.label}>Job description:</span>{' '}
              {profile.lookingForAJobDescription || '—'}
            </li>
          </ul>

          <h4 className={classes.contactsTitle}>Contacts</h4>
          <ul>
            {Object.keys(contacts).map((key) => (
              <li key={key}>
                <span className={classes.label}>{key}:</span>{' '}
                {contacts[key] ? (
                  <a
                    href={
                      contacts[key].startsWith('http')
                        ? contacts[key]
                        : `https://${contacts[key]}`
                    }
                    target="_blank"
                    rel="noreferrer"
                  >
                    {contacts[key]}
                  </a>
                ) : (
                  '—'
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ProfileInfo
