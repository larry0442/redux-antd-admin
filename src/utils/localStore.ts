/* 本地存储 */
const store = window.localStorage;

class LocalStore {
  /**
   * @description: value或者{}(stringify)
   */

  /**
   * @description:设置localStore 
   * @param {key} string 
   * @param {value} any 
   * @return {null} 
   */
  public static set(key: string, value: any) {
    if (!store) {
      return
    }
    // backup
    let v = value;
    try {
      if (typeof value === 'object') {
        v = JSON.stringify(v)
        store.setItem(key, v)
      }
    } catch (error) {

    }
  }

  /**
   * @description: 获取localStore
   * @param {string} key 
   * @return {any}  
   */
  public static get(key: string) {
    if (!store) {
      return;
    }
    try {
      return store.getItem(key)
    } catch (error) {

    }
  }

  /**
   * @description:  获取的时候转换为Json
   * @param {string} key 
   * @return {null} 
   */
  public static get2Json(key: string) {
    if (!store) {
      return;
    }
    const data = store.getItem(key)
    if (data) {
      try {
        return JSON.parse(data)
      } catch (error) {

      }
    }
    return null
  }

/**
 * @description: 删除
 * @param {key} string
 * @return {type} 
 */  
  public static remove(key: string) {
    if(!store) {
      return;
    }
    try {
      store.removeItem(key)
    } catch (error) {
      
    }
  }
}
export default LocalStore