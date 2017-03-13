CREATE (n:Company { name: 'Little Projects Pty. Limited' })-[:HasSecretary]->
  (p:Person { name: 'Paul David Gill' })-[:HasAddress]->
  (a:Address { addressLine: '21 Cade Grove, Macleod' })