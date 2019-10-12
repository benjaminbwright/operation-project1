class DB {
  constructor() {
    this.storage = window.localStorage;
    this.getPlayer = this.getPlayer.bind(this)
    this.addPlayer= this.addPlayer.bind(this)
    this.updatePlayer = this.updatePlayer.bind(this)
    this.removePlayer = this.removePlayer.bind(this)
    this.nuclearBomb = this.nuclearBomb.bind(this)
  }

  addPlayer(str,obj) {
    if(!this.getPlayer(str)) {
      this.storage.setItem(str,JSON.stringify(obj))
      console.log(`Player ${str} created`)
    } else {
        return -1;
    }
  }

  getPlayer(str) {
    if(!this.storage.getItem(str)){
      console.log(`Player not found!`)
    } else {
        return JSON.parse(this.storage.getItem(str))
    }
  }

  updatePlayer(str,obj) {
    this.storage.removeItem(str);
    this.storage.setItem(str,JSON.stringify(obj))
    return obj;
  }

  removePlayer(str) {
    this.storage.removeItem(str);
  }

  listAllPlayers() {
    const allKeys = [];
    const keys = Object.keys(this.storage);
    let i = keys.length;

      while( i-- ) {
        allKeys.push(this.get(keys[i]))
      }

    return allKeys;
  }

  allStorage() {
    const storageObj = {}// Notice change here
    const keys = Object.keys(this.storage)
    let i = keys.length;

    while ( i-- ) {
        storageObj[ keys[i] ] = this.getPlayer( keys[i] );
    }

    return storageObj;
  }

  nuclearBomb(){
    this.storage.clear();
  }

}
