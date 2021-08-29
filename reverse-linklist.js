

const input = {
  val: 100,
  next: {
    val: 200,
    next: {
      val: 300,
      next: {
        val: 400,
        next: {
          val: 500,
          next: {
            val: 600,
            next: null,
          }
        }
      }
    }
  }
}

const reverseLinkList = (linkList) => {
  if (linkList.next === null) return linkList;
  let _list = null;
  let ptr = linkList;
  while(ptr) {
    let next = ptr.next;
    let last = ptr;
    last.next = _list;
    _list = last;
    ptr = next;
  }
  return _list;
}

const tranverse = (list) => {
  let ptr = list;
  while (ptr) {
    console.log(ptr.val);
    ptr = ptr.next;
  }
}

const output = reverseLinkList(input);
tranverse(output);
