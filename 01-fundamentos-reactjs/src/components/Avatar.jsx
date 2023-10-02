import styles from './Avatar.module.css'

// desestruturacao do props, pegando somente oque queremos, hasBorder/src;
export function Avatar({ hasBorder = true, src }) {

  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      src={src}
    />
  )
}