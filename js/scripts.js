// Business Logic for AddressBook ---------
function AddressBook() {
  this.contacts = [];
  this.currentId = 0;
}

AddressBook.prototype.addContact = function(contact) {
  contact.id = this.assignId();
  this.contacts.push(contact);
}

AddressBook.prototype.assignId = function(contact) {
  this.currentId += 1;
  return this.currentId;
}

AddressBook.prototype.findContact = function(id) {
  for (var i=0; i< this.contacts.length; i++) {
    if (this.contacts[i]) {
    if (this.contacts[i].id === id) {
      return this.contacts[i];
    }
   }
  };
  return false;
}

AddressBook.prototype.deleteContact = function(id) {
  for (var i=0; i<this.contacts.length; i++) {    
    if (this.contacts[i]) {
      if (this.contacts[i].id === id){
      delete this.contacts[i];
      return true;
      }
     }
    };
    return false;
  }

// Business Logic for Contacts ---------
function Contact(firstName, lastName, phoneNumber) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.phoneNumber = phoneNumber;
}

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}

Contact.prototype.update = function(AddressBook, firstName, lastName, phoneNumber) {
  for (var i=0; i < AddressBook.contacts.length; i++) {
    if (AddressBook.contacts[i]) {
      if (AddressBook.contacts[i].id === this.id) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phoneNumber = phoneNumber;
        return true;
      }
    }
    return false;
  }
}


var addressBook = new AddressBook();
var contact = new Contact("Ada", "Lovelace", "503-555-0100");
var contact2 = new Contact("Grace", "Hopper", "503-555-0199");
addressBook.addContact(contact);
addressBook.addContact(contact2);