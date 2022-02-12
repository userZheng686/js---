//定义一系列的算法，把它们一个个封装起来，并且使它们可以互相替换

/**
 * 策略类
 */

// 普通会员策略类
class RegularCard {
  calculate(deposit) {
    return deposit * 0.1;
  }
}

// 金卡会员策略类
class GoldCard {
  calculate(deposit) {
    return deposit * 0.2;
  }
}

// 白金卡会员策略类
class PlatinumCard {
  calculate(deposit) {
    return deposit * 0.3;
  }
}

 
/**
 * 奖金类(对应环境类Context)
 */
class Bonus {
  constructor() {
    this.deposit = null; // 预存款
    this.strategy = null; // 会员等级对应的策略对象
  }
  // 设置顾客的预存款
  setSalary( deposit ) {
    this.deposit = deposit;    // 设置顾客的预存款
  }
  // 设置顾客的会员等级对应的策略对象
  setStrategy( strategy ) {
    this.strategy = strategy;    // 设置顾客的会员等级对应的策略对象
  };
  // 取得赠款金额
  getBonus() { 
    return this.strategy.calculate( this.deposit ); // 把计算赠款的操作委托给对应的策略对象
  };
}


/**测试用例 */
let bonus = new Bonus();

bonus.setSalary( 2000 ); // 设置顾客的预存款2000
bonus.setStrategy( new GoldCard() );  // 设置策略对象-金卡会员

console.log( bonus.getBonus() );    // 输出：400

bonus.setStrategy( new PlatinumCard() );  // 设置策略对象-白金卡会员
console.log( bonus.getBonus() );    // 输出：600
