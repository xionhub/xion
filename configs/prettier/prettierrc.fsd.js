module.exports = {
  plugins: [require.resolve('@trivago/prettier-plugin-sort-imports')],
  importOrder: [
    '<THIRD_PARTY_MODULES>',
    '^[@/]',
    '^~shared/(.*)$',
    '^~entities/(.*)$',
    '^~feature/(.*)$',
    '^~widget/(.*)$',
    '^~page/(.*)$',
    '^~app/(.*)$',
    '^~/(.*)$',
    '^[./]',
    '^[../]',
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};
