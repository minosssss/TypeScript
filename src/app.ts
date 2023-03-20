class Department {
  name:string;
  private readonly id: string;
  // readonly는 초기생성시에만 입력가능
  private emplyees: string[] = [];
  //생성자
  constructor(id:string, n:string) {
    this.id = id;
    this.name = n;
  }

  //메서드
  describe(this:Department) {
    console.log(`Department (${this.id}): ${this.name}`);
  }
  addEmployee(emplyees: string) {
    this.emplyees.push(emplyees);
  }

  printEmployeeInformation() {
    console.log(this.emplyees.length);
    console.log(this.emplyees);
  }

}

const appliedMusic = new Department('2093512','applied Music');
appliedMusic.addEmployee('Minho');
appliedMusic.addEmployee('YoungHoon');
appliedMusic.describe();

//private 메서드는 직접 접근할 수 없다.
// appliedMusic.addEmployee[2] = 'TEST'

// 함수 자체를 전달하지 않으면, 정의된 this객체가 존재하지 않으므로 'undifined' 가 뜬다.
// const appliedMusicCopy = { describe : appliedMusic.describe }
// appliedMusicCopy.describe();

// const appliedMusicCopy = { name:"DUMMY", describe : appliedMusic.describe }
// appliedMusicCopy.describe();