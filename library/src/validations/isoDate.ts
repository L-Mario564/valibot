import { ValiError } from '../error';
import type { ValidateInfo } from '../types';

/**
 * Creates a validation functions that validates a date.
 *
 * Format: yyyy-mm-dd
 *
 * @param error The error message.
 *
 * @returns A validation function.
 */
export function isoDate<TInput extends string>(error?: string) {
  return (input: TInput, info: ValidateInfo) => {
    if (!/^\d{4}-(0[1-9]|1[0-2])-([12]\d|0[1-9]|3[01])$/.test(input)) {
      throw new ValiError([
        {
          validation: 'iso_date',
          origin: 'value',
          message: error || 'Invalid date',
          input,
          ...info,
        },
      ]);
    }
    return input;
  };
}
