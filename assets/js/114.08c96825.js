(window.webpackJsonp=window.webpackJsonp||[]).push([[114],{748:function(e,t,a){"use strict";a.r(t);var n=a(0),s=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h2",{attrs:{id:"introduction-of-transaction"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#introduction-of-transaction"}},[e._v("#")]),e._v(" Introduction of Transaction")]),e._v(" "),a("p",[e._v("Here is the introduction of "),a("a",{attrs:{href:"https://redis.io/topics/transactions",target:"_blank",rel:"noopener noreferrer"}},[e._v("redis transaction"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("MULTI, EXEC, DISCARD and WATCH are the foundation of transactions in Redis. They allow the execution of a group of commands in a single step, with two important guarantees:")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("All the commands in a transaction are serialized and executed sequentially. It can never happen that a request issued by another client is served in the middle of the execution of a Redis transaction. This guarantees that the commands are executed as a single isolated operation.")])]),e._v(" "),a("li",[a("p",[e._v("Either all of the commands or none are processed, so a Redis transaction is also atomic. The EXEC command triggers the execution of all the commands in the transaction, so if a client loses the connection to the server in the context of a transaction before calling the MULTI command none of the operations are performed, instead if the EXEC command is called, all the operations are performed. When using the append-only file Redis makes sure to use a single write(2) syscall to write the transaction on disk. However if the Redis server crashes or is killed by the system administrator in some hard way it is possible that only a partial number of operations are registered. Redis will detect this condition at restart, and will exit with an error. Using the redis-check-aof tool it is possible to fix the append only file that will remove the partial transaction so that the server can start again.")])])]),e._v(" "),a("h2",{attrs:{id:"example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[e._v("#")]),e._v(" Example")]),e._v(" "),a("h5",{attrs:{id:"exec"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#exec"}},[e._v("#")]),e._v(" EXEC")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("127.0.0.1:6379> MULTI\nOK\n127.0.0.1:6379> SET key1 1\nQUEUED\n127.0.0.1:6379> HSET key2 field1 1\nQUEUED\n127.0.0.1:6379> SADD key3 1\nQUEUED\n127.0.0.1:6379> EXEC\n1) OK\n2) (integer) 1\n3) (integer) 1\n")])])]),a("h5",{attrs:{id:"discard"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#discard"}},[e._v("#")]),e._v(" DISCARD")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("127.0.0.1:6379> MULTI\nOK\n127.0.0.1:6379> SET key1 1\nQUEUED\n127.0.0.1:6379> DISCARD\nOK\n127.0.0.1:6379> EXEC\n(error) ERR EXEC without MULTI\n")])])]),a("h5",{attrs:{id:"watch"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#watch"}},[e._v("#")]),e._v(" WATCH")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("127.0.0.1:6379> WATCH key1\nOK\n127.0.0.1:6379> set key1 2\nOK\n127.0.0.1:6379> MULTI\nOK\n127.0.0.1:6379> set key1 3\nQUEUED\n127.0.0.1:6379> set key2 3\nQUEUED\n127.0.0.1:6379> EXEC\n(nil)\n")])])])])}),[],!1,null,null,null);t.default=s.exports}}]);