class Node {
  constructor(data, next = null) {
    this.data = data
    this.next = next
  }
}

class LinkedList {
  constructor() {
    this.head = null
    this.tail = null
  }

  addAsQueue(data) {
    const current = this.head
    if (this.head === null) {
      const newNode = new Node(data)
      this.head = newNode
      return
    }
    const newNode = new Node(data, current)
    current.next = newNode
    this.tail = newNode
  }

  addAsStack() {
    const current = this.head  || null
    const newNode = new Node(data)
    this.head = newNode
    newNode.next = current
  }
  pop() {
    const current = this.head
    const data = current.data
    this.head = current.next || null
    return data
  }
  popTail() {
    const current = this.tail
    if (current) {
      const data = current.data
      this.head = current.next
      return data
    }
  }
}

const ll = new LinkedList()

ll.addAsQueue('1')
ll.addAsQueue('2')
ll.addAsQueue('3')
ll.addAsQueue('4')
while(ll.head != null){
  console.log(ll.pop())
}
