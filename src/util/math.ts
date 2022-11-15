export class MathUtil {
    public static factorial(num: number): number {
        if(num == 0) return 1;
        return num * MathUtil.factorial(num - 1);
    }

    public static dfactorial(num: number): number {
        if(num == 0 || num == 1) return 1;
        return num * MathUtil.dfactorial(num - 2);
    }

    public static tetrate(num: number, pow: number): number {
        let result = num;
        for(let i = 0; i < pow; i++) result **= num;
        return result;
    }

    public static subfactorial(num: number): number {
        num = parseInt(num.toString());

        let result = 0;
        let sum = MathUtil.factorial(num);

        for (let i = 0; i <= num; i++) {
            result += (Math.pow(-1, i) / MathUtil.factorial(i));
        }

        return sum * result;
    }
}