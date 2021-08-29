/**
 * 单例模式
 */
class Singleton {
  
  instance = null;

  static getInstance() {
    if (!this.instance) this.instance = new Singleton();
    return this.instance;
  }
  
}

const single1 = Singleton.getInstance();
const single2 = Singleton.getInstance();

console.log(single1 === single2);

const createSingle = (obj) => {
  return () => obj;
}

const single = createSingle({
  name: 'zhangzheng',
  age: 18,
});

const s1 = single();
const s2 = single();
console.log(s1 == s2);

function Single() {
}

Single.prototype.instance = {
  name: 'zhangzhengsmiling',
  age: 18,
}
Single.prototype.getInstance = () => {
  return this.instance;
}
const singleGet = new Single();
const sin1 = singleGet.getInstance();
const sin2 = singleGet.getInstance();
console.log(sin1 === sin2);