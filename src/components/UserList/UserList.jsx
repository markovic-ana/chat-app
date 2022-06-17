import React from 'react'
import data from '/Users/ana/Documents/Projects/chat-app/src/data.json'
import styles from './UserList.module.css'

const UserList = () => {
  return (
    <div>
      {data &&
        data.length > 0 &&
        data.map((item, id) => (
          <div className={styles.user} key={id}>
            <img src={item.picture_data.src} alt={item.picture_data.alt} />
            <div className={styles.details}>
              <h2 className={styles.name}>{item.name}</h2>
              <p className={styles.status}>{item.status}</p>
            </div>
          </div>
        ))}
    </div>
  )
}

export default UserList
