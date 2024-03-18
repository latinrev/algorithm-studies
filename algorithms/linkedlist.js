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
    if(!current){
      const newNode = new Node(data)
      this.head = newNode
      this.tail = newNode
      return
    }
    const newNode = new Node(data)
    this.tail.next = newNode
    this.tail = newNode
  }

  addAsStack(data) {
    const current = this.head || null
    const newNode = new Node(data)
    this.head = newNode
    newNode.next = current
  }

  popAsQueue(){
    const current = this.head
    if(current){
      this.head = current.next
      return current.data
    }
  }
  popAsStack() {
    if (this.head) {
      const current = this.head
      const data = current.data
      this.head = current.next || null
      return data
    }else{
      console.log('No more elements in the list')
    }
  }
}

const stack = new LinkedList()
stack.addAsStack('1')
stack.addAsStack('2')
stack.addAsStack('3')
console.log(JSON.stringify(stack))
console.log(stack.popAsStack());
console.log(JSON.stringify(stack))

const queue = new LinkedList()
queue.addAsQueue('1')
queue.addAsQueue('2')
queue.addAsQueue('3')
console.log(JSON.stringify(queue))
console.log(queue.popAsQueue());
console.log(JSON.stringify(queue))
