import styled from 'styled-components';

export const TodoBoxs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TodoList = styled.ul`
  display: flex;
  gap: 30px;
  justify-content: center;
  padding: 0;
}
`;
export const TodoItem = styled.li`
  width: 200px;
  border: 1px solid burlywood;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: bisque;
  border-radius: 10%;
  gap: 20px;
`;

export const TodoText = styled.p`
  display: flex;
  margin: 0;
`;

export const TodoButton = styled.button`
  background-color: bisque;
  border: 1px solid burlywood;
`;
