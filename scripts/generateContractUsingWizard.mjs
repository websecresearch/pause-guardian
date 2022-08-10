import { erc20 } from '@openzeppelin/wizard'
import { writeFileSync } from 'fs'

const params = {
  name: 'ExampleToken',
  symbol: 'ETK',
  mintable: true,
  premint: '1000000',
  access: 'roles',
  upgradeable: 'uups',
  pausable: true,
}

const contract = erc20.print(params)

writeFileSync(`./contracts/${params.name}.sol`, contract)
writeFileSync(`./contract.json`, params.name)
