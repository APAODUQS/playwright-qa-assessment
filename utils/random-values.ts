import { faker } from "@faker-js/faker";

export class RandomDataGenerator {
  static generateRandomValue(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  static generateRandomName(): string {
    return faker.person.firstName().replace(/\W/, "");
  }

  static generateRandomLastname(): string {
    return faker.person.lastName().replace(/\W/, "");
  }

  static generateRandomPostalCode(): string {
    return faker.location.zipCode().replace(/\W/, "");
  }

  static generateRandomPassword(): string {
    return faker.internet.password();
  }
}
