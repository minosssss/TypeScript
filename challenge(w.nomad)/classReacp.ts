abstract class User {
    
    constructor(
        // private firstName:string,    
        // private lastName: string,
        // private nickName:string

        // 상속받는 다른 클래스에서 사용하기 위해 protected로 변경;
        protected firstName:string,    
        protected lastName: string,
        protected nickName:string
        ) {
       
    }
    abstract getNickName():void
    abstract getFullName():string
}

class Player extends User {
    protected fullName:string;
    constructor(firstName:string,lastName:string,nickName:string) {
        super(firstName,lastName,nickName);
        this.fullName = ''.concat(firstName,' ',lastName).toUpperCase();
    }
    getNickName() {
        console.log(this.nickName);
    }
    getFullName() {
        return this.fullName;
    }
}

const minho = new Player("minho","lee","마이노");
console.log(minho);
console.log(minho.getFullName())
console.log(minho.getNickName())


/* 추상(abstract) 클래스 */
/* 
추상 클래스는 오직 다른 클래스가 상속받을 수 있는 클래스이다.
하지만 직접 새로운 인스턴스를 만들 수는 없다.

public: 모든 클래스에서 접근 가능
private: 해당 클래스 내에서만 접근 가능 (자식 클래스에서도 접근 불가)
protected: 해당 클래스와 자식 클래스에서 접근 가능 
*/
