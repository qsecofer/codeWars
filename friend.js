function friend(friends){
  return friends.filter(name => name.length === 4);
}


friend(["Ryan", "Kieran", "Mark"]);//?
friend(["Ryan", "Jimmy", "123", "4", "Cool Man"]);//?
friend(["Jimm", "Cari", "aret", "truehdnviegkwgvke", "sixtyiscooooool"]);//?
friend(["Love", "Your", "Face", "1"]);//?
