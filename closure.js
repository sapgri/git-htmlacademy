/**
 *  Смысл в том, что из-за способности функции запоминать контекст свого вызова
 * это замыкание каждый раз создает новый счетчик, недоступный извне. Изменить 
 * значение счетчика можно только вызвав завязанную на него функцию.  А если вызов 
 * происходит тольк при создании очередного объекта, то мы имеем уникальный  
 * числовой id, который при создании комментариев у новой фотографии начинается не с
 * единицы, а с цифры на единицу больше чем последний комментарий у предыдущего фото.
 */
 
const createCounter = () => {
    let count = 0;
    return () => ++count;
  }
  
  // Вызов ради вызова это полная ерунда, тут спору нет
  console.log(createCounter()(), 'полная чепуха!');
  console.log(createCounter()(), 'полная чепуха!');
  console.log(createCounter()(), 'полная чепуха!');
  console.log(createCounter()(), 'полная чепуха!');
  console.log(createCounter()(), 'полная чепуха!');
  console.log(createCounter()(), 'полная чепуха!');
  console.log(createCounter()(), 'полная чепуха!');
  console.log(createCounter()(), 'полная чепуха!');
  console.log(createCounter()(), 'полная чепуха!');
  
  // А теперь делаем отдельные счётчики для фото и для комментариев
  const photoCounter = createCounter();
  const commentCounter = createCounter();
  
  console.log('id: ', photoCounter(), ' при создании новой фотографии');
  console.log('id: ', commentCounter(), ' при создании нового комментария');
  console.log('id: ', commentCounter(), ' при создании нового комментария');
  console.log('id: ', photoCounter(), ' при создании новой фотографии');
  console.log('id: ', photoCounter(), ' при создании новой фотографии');
  console.log('id: ', commentCounter(), ' при создании нового комментария');
  console.log('id: ', photoCounter(), ' при создании новой фотографии');
  console.log('id: ', photoCounter(), ' при создании новой фотографии');
  console.log('id: ', photoCounter(), ' при создании новой фотографии');
  console.log('id: ', photoCounter(), ' при создании новой фотографии');
  console.log('id: ', commentCounter(), ' при создании нового комментария');
  
  // А тут нам сказали сделать счётчик для постов, а то они не посчитаны
  const postCounter = createCounter();
  
  console.log('id:', postCounter(), ' при создании нового поста');
  console.log('id:', postCounter(), ' при создании нового поста');
  console.log('id:', commentCounter(), ' при создании нового комментария');
  console.log('id:', postCounter(), ' при создании нового поста');
  console.log('id:', photoCounter(), ' при создании новой фотографии');
  