export const TableSkeleton = ({ rows = 15 }) => {
  return (
    <div className='px-5'>
      <table className='table-auto text-left min-w-full animate-pulse'>
        <thead className='border-b-[1px] border-gray-300/30 z-50'>
          <tr className='text-gray-300'>
            <th className='font-normal px-4 py-2 text-center whitespace-nowrap'>
              <div className='h-4 bg-slate-50/30 rounded w-4'></div>
            </th>
            <th className='font-normal px-4 py-2 whitespace-nowrap'>
              <div className='h-4 bg-slate-50/30 rounded w-24'></div>
            </th>
            <th className='font-normal px-4 py-2 whitespace-nowrap'>
              <div className='h-4 bg-slate-50/30 rounded w-24'></div>
            </th>
            <th className='font-normal px-4 py-2 whitespace-nowrap'>
              <div className='h-4 bg-slate-50/30 rounded w-24'></div>
            </th>
            <th className='font-normal px-4 py-2 whitespace-nowrap'>
              <div className='h-4 bg-slate-50/30 rounded w-4'></div>
            </th>
          </tr>
        </thead>
        <tbody>
          {[...Array(rows)].map((_, index) => (
            <tr key={index}>
              <td className='whitespace-nowrap py-4 px-4 text-sm'>
                <div className='h-4 bg-slate-50/30 rounded w-4'></div>
              </td>
              <td className='whitespace-nowrap px-4 py-4 text-sm'>
                <div className='h-4 bg-slate-50/30 rounded w-24'></div>
              </td>
              <td className='whitespace-nowrap px-4 py-4 text-sm'>
                <div className='h-4 bg-slate-50/30 rounded w-24'></div>
              </td>
              <td className='whitespace-nowrap px-4 py-4 text-sm'>
                <div className='h-4 bg-slate-50/30 rounded w-24'></div>
              </td>
              <td className='whitespace-nowrap px-4 py-4 text-center'>
                <div className='h-4 bg-slate-50/30 rounded w-4'></div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
