import { ApiProperty } from '@nestjs/swagger'

export class ProductReadModel {
	@ApiProperty({ example: 'product name' })
	name: string
	@ApiProperty({ example: 'product code' })
	code: string

	@ApiProperty({ example: 'product value' })
	value: number

	@ApiProperty({ example: '12o3180293812' })
	isoCode: string

	static of(name: string, code: string, value: number, isoCode: string): ProductReadModel {
		const p = new ProductReadModel()
		p.name = name
		p.code = code
		p.isoCode = isoCode
		p.value = value

		return p
	}
}
