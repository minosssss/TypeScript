class Department {

  static fiscalYear = 2023;
  //정적 속성과 정적 메서드의 전체적인 개념은 인스턴스와 분리되어 있다.

  name:string;

  private readonly id: string;
  // readonly는 초기생성시에만 입력가능
  // protected를 사용하면 해당 클래스를 상속받는 클래스에서도 사용이 가능하다. 
  private emplyees: string[] = [];
  //생성자
  constructor(id:string, n:string) {
    this.id = id;
    this.name = n;

    // 인스턴스와 분리 되어있는 정적 속성이기에, this가 아닌 클래스를 바라본다.
    console.log(Department.fiscalYear);
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

  static createEmployee(name: string) {
    return {name:name};
  }

}

// static 정적 메서드는 초기화 없이 바로 접근하여 사용 가능
console.log(Department.createEmployee('TEST'));

class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, 'IT');
    this.admins = admins;
  }
}

class AccountingDepartment extends Department {
  private lastReport : string;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error('No report found...')
  }

  set mostRecentReport(value) {
    if (!value) {
      throw new Error('Please pass in a valid value');
    }
    this.addReport(value);
  }

  constructor(id: string, private reports: string[]) {
    super(id, 'IT');
    this.lastReport = reports[0];
  }

  addReport(text : string) {
    this.reports.push(text);
  }

  printReports() {
    console.log(this.reports);
  }
}

const account = new AccountingDepartment('20230328',[]);
account.addReport('Something went wrong...');

account.printReports();

const appliedMusic = new Department('2093512','applied Music');
const it = new ITDepartment('20230327', ['Minho','YoungHoon']);

it.addEmployee('Minho');
it.addEmployee('YoungHoon');
it.describe();
it.name = "NEW NAME";
it.printEmployeeInformation();
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