export const testBoardMock = {
  title: 'Test board',
  description: 'My board for test',
  id: 'dc4ee44c-915b-4ef2-a70a-111017ffe9ff',
  columns: [
    {
      id: 'b9a5b4be-8baa-4abd-ad70-54ab3a3711a9',
      title: 'Column 1',
      order: 1,
      tasks: [
        {
          id: '40af606c-c0bb-47d1-bc20-a2857242cde1',
          title: 'Task: #1',
          done: false,
          order: 1,
          description: 'This is Task 1',
          userId: '70af606c-c0bb-47d1-bc20-a2857242cde3',
          boardId: 'dc4ee44c-915b-4ef2-a70a-111017ffe9ff',
          columnId: 'b9a5b4be-8baa-4abd-ad70-54ab3a3711a9',
          files: [
            {
              filename:
                'https://images.unsplash.com/photo-1621609764095-b32bbe35cf3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80',
              fileSize: 6105000,
            },
          ],
        },
        {
          id: '40af606c-c0bb-47d1-bc20-a2857242cde2',
          title: 'Task: #2',
          done: false,
          order: 2,
          description: 'This is Task 2',
          userId: '70af606c-c0bb-47d1-bc20-a2857242cde3',
          boardId: 'dc4ee44c-915b-4ef2-a70a-111017ffe9ff',
          columnId: 'b9a5b4be-8baa-4abd-ad70-54ab3a3711a9',
          files: [
            {
              filename:
                'https://images.unsplash.com/photo-1416339442236-8ceb164046f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1103&q=80',
              fileSize: 6105000,
            },
          ],
        },
        {
          id: '40af606c-c0bb-47d1-bc20-a2857242cde3',
          title: 'Task: #3',
          done: false,
          order: 3,
          description: 'This is Task 3',
          userId: '70af606c-c0bb-47d1-bc20-a2857242cde3',
          boardId: 'dc4ee44c-915b-4ef2-a70a-111017ffe9ff',
          columnId: 'b9a5b4be-8baa-4abd-ad70-54ab3a3711a9',
          files: [
            {
              filename:
                'https://images.unsplash.com/photo-1454165205744-3b78555e5572?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
              fileSize: 6105000,
            },
          ],
        },
      ],
    },
    {
      id: 'bbac10dd-9406-4074-a4a9-2300bad2cace',
      title: 'Column 2',
      order: 2,
      tasks: [
        {
          id: '40af606c-c0bb-47d1-bc20-a2857242cde4',
          title: 'Task: #4',
          done: false,
          order: 1,
          description: 'This is Task 4',
          userId: '70af606c-c0bb-47d1-bc20-a2857242cde3',
          boardId: 'dc4ee44c-915b-4ef2-a70a-111017ffe9ff',
          columnId: 'bbac10dd-9406-4074-a4a9-2300bad2cace',
          files: [
            {
              filename:
                'https://images.unsplash.com/photo-1457305237443-44c3d5a30b89?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174',
              fileSize: 6105000,
            },
          ],
        },
        {
          id: '40af606c-c0bb-47d1-bc20-a2857242cde5',
          title: 'Task: #5',
          done: true,
          order: 2,
          description: 'This is Task 5',
          userId: '70af606c-c0bb-47d1-bc20-a2857242cde3',
          boardId: 'dc4ee44c-915b-4ef2-a70a-111017ffe9ff',
          columnId: 'bbac10dd-9406-4074-a4a9-2300bad2cace',
          files: [
            {
              filename:
                'https://images.unsplash.com/photo-1521939094609-93aba1af40d7?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074',
              fileSize: 6105000,
            },
          ],
        },
      ],
    },
    {
      id: 'aee113d4-fa23-4e91-8144-0880690b8777',
      title: 'Column 3',
      order: 3,
      tasks: [
        {
          id: '40af606c-c0bb-47d1-bc20-a2857242cde6',
          title: 'Task: #6',
          done: false,
          order: 1,
          description: 'This is Task 6',
          userId: '70af606c-c0bb-47d1-bc20-a2857242cde3',
          boardId: 'dc4ee44c-915b-4ef2-a70a-111017ffe9ff',
          columnId: 'aee113d4-fa23-4e91-8144-0880690b8777',
          files: [],
        },
      ],
    },
  ],
};

export const testBoardsMock = [testBoardMock, testBoardMock, testBoardMock];
