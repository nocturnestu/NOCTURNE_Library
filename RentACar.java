import java.util.Scanner;

public class RentACar {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter base fee: ");
        double baseFee = scanner.nextDouble();

        System.out.print("Enter charge per mile: ");
        double chargePerMile = scanner.nextDouble();

        System.out.print("Enter number of miles driven: ");
        double milesDriven = scanner.nextDouble();

        double totalCost = baseFee + (chargePerMile * milesDriven);

        System.out.printf("Total Rental Cost: P%.2f%n", totalCost);

        scanner.close();
    }
}
