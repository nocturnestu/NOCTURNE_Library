import java.util.Scanner;

public class GrossPayCalculator {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter annual salary: ");
        double annualSalary = scanner.nextDouble();

        System.out.print("Enter number of pay periods: ");
        int payPeriods = scanner.nextInt();

        double grossPay = annualSalary / payPeriods;

        System.out.printf("Gross Pay Per Period: P%.2f%n", grossPay);

        scanner.close();
    }
}
