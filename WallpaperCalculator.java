import java.util.Scanner;

public class WallpaperCalculator {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter room length (feet): ");
        double length = scanner.nextDouble();

        System.out.print("Enter room width (feet): ");
        double width = scanner.nextDouble();

        System.out.print("Enter ceiling height (feet): ");
        double height = scanner.nextDouble();

        System.out.print("Enter square feet a single roll covers: ");
        double rollCoverage = scanner.nextDouble();

        double totalArea = 2 * (length + width) * height;
        int rollsNeeded = (int) Math.ceil(totalArea / rollCoverage);

        System.out.printf("Total Surface Area: %.2f sq ft%n", totalArea);
        System.out.println("Single Rolls Needed: " + rollsNeeded);

        scanner.close();
    }
}
