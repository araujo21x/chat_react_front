import { z as zod } from 'zod';
import {
	maxMsg,
	minMsg,
	numberIntMsg,
	numberMsg,
	numberPositiveMsg,
	stringMsg,
	dateMsg,
	emailMsg,
} from './zodMessages';

class ZodGenericValidation {
	static string(field: string, min = 1, max = 255) {
		return zod
			.string(stringMsg(field))
			.trim()
			.min(min, minMsg(field, min))
			.max(max, maxMsg(field, max));
	}

	static stringOptional(field: string, max = 255) {
		return zod
			.string(stringMsg(field))
			.trim()
			.max(max, maxMsg(field, max))
			.optional()
			.nullable();
	}

	static numeric(field: string) {
		return zod
			.number(numberMsg(field))
			.int(numberIntMsg(field))
			.nonnegative(numberPositiveMsg(field));
	}

	static numericOptional(field: string) {
		return zod
			.number(numberMsg(field))
			.int(numberIntMsg(field))
			.nonnegative(numberPositiveMsg(field))
			.optional()
			.nullable();
	}

	static decimal(field: string) {
		return zod
			.number(numberMsg(field))
			.nonnegative(numberPositiveMsg(field))
			.max(99999999999, maxMsg(field, 99999999999));
	}

	static decimalOptional(field: string) {
		return zod
			.number(numberMsg(field))
			.nonnegative(numberPositiveMsg(field))
			.max(99999999999, maxMsg(field, 99999999999))
			.optional()
			.nullable();
	}

	static numberIsString(field: string) {
		return zod
			.string(stringMsg(field))
			.trim()
			.regex(/^\d+$/, `${field} precisa ser um número`);
	}

	static numberIsStringOptional(field: string) {
		return zod
			.string(stringMsg(field))
			.trim()
			.regex(/^\d+$/, `${field} precisa ser um número`)
			.optional()
			.nullable();
	}

	static password = this.string('Senha', 8, 255);

	static email = zod
		.string(stringMsg('email'))
		.trim()
		.max(255, maxMsg('email', 255))
		.email(emailMsg('Email'));

	static phone = this.string('Telefone', 11, 11).regex(/\d{11}/g);

	static birthDay(ageMin = 18) {
		return zod.coerce.date(dateMsg('data de nascimento')).refine((val) => {
			const date = new Date(val);
			date.setHours(val.getHours() + 3);

			date.setFullYear(date.getFullYear() + ageMin);
			if (date.getTime() >= new Date().getTime()) return false;
			return true;
		}, `Você precisa ter mais de ${ageMin}`);
	}
}

export default ZodGenericValidation;
