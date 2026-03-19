function shouldRepair(value: string) {
  return /[\u00c3\u00c2\u00e2\u0153\u00f0]/.test(value);
}

export function repairMojibake(value: string) {
  let next = value;

  for (let attempt = 0; attempt < 3; attempt += 1) {
    if (!shouldRepair(next)) {
      break;
    }

    const repaired = Buffer.from(next, 'latin1').toString('utf8');

    if (!repaired || repaired === next || repaired.includes('�')) {
      break;
    }

    next = repaired;
  }

  return next;
}

export function normalizeCopy<T>(value: T): T {
  if (typeof value === 'string') {
    return repairMojibake(value) as T;
  }

  if (Array.isArray(value)) {
    return value.map((item) => normalizeCopy(item)) as T;
  }

  if (value && typeof value === 'object') {
    return Object.fromEntries(
      Object.entries(value).map(([key, item]) => [key, normalizeCopy(item)]),
    ) as T;
  }

  return value;
}
