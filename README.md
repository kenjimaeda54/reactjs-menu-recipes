Menu de receitas
Aplicacao para consumir api rest, feita em JDBC,Java,Web Service,Oracle SQL.</br>
[API](https://github.com/kenjimaeda54/api-rest-recipes)

## Motivacao
Criou uma aplicação aonde é possível consultar as receitas registradas na API, cadastrar novas e editar as recentes


## Feature
- Usamos bastante recursos do paradigma funcional como filter, map, find
- Para lidar com filtragem pelo dia atual, editamos a data local para modelo da api.
- Método sort foi interessante para organizar as datas conforme os horários e dia, para ordenar números apenas a subtração do menor para maior resolve, para strings e necessá
- 
``` javascript
//util 
export function getDayFormat() {
  const date = new Date();
  const day = date.getDate() < 9 ? `0${date.getDate()}` : date.getDate();
  const mouth = date.getMonth() + 1;
  const year = date.getFullYear();
  return `${year}-${mouth}-${day}`;
}

export function Home() {
useEffect(() => {
    const controller = new AbortController();
    async function loadRecipes() {
      try {
        const url = baseUrl;
        const response = await fetch(url, { controller: controller.signal });
        const fetchData = await response.json();
        setRecipesDay(
          fetchData
            .filter((recipe) => recipe.date === getDayFormat())
            .sort(function (x, y) {
              if (x.hours > y.hours) {
                return -1;
              }
              if (x.hours < y.hours) {
                return 1;
              }
            }),
        );
        const dataSort = fetchData.sort(function (x, y) {
          return y.like - x.like;
        });
        setRecipesSort(dataSort);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        alert('Erro no servidor');
      } finally {
        setIsLoading(false);
      }
    }
    loadRecipes();
    return () => {
      controller.abort();
    };
  }, []);

}


```

- Para evitar números excessivos de requests no banco foi usado o método abort da api do DOM 

``` javascript



  useEffect(() => {
    const controller = new AbortController();
    async function getRecipes() {
      try {
        const url = baseUrl;
        const response = await fetch(url, { signal: controller.signal });
        const data = await response.json();
        setRecipes(data);
      } catch (err) {
        console.log(err);
        alert('Erro no servidor');
      } finally {
        setIsLoading(false);
      }
    }

    getRecipes();

    return () => {
      controller.abort();
    };
  }, []);
  
```
- Para lidar com método put, com várias atualizações usamos um timer para auxiliar a percorrer toda alteração.

``` javascript
 
export function Voting() {
  let repeated = 0;

 function handleConfirmation() {
    setIsLoading(true);
    async function updateRecipes(recipe) {
      repeated += 1;
      try {
        await fetch(`${baseUrl}/${recipe.id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(recipe),
        });
      } catch (error) {
        console.log(error);
      }
    }
    const timer = setInterval(() => {
      if (repeated === recipesUpdate.length) {
        window.location = '/';
        setIsLoading(false);
        setRecipesUpdate([]);
        setRecipes([]);
        clearInterval(timer);
        repeated = 0;
        return;
      }
      recipesUpdate.map((item) => {
        const recipes = {
          like: item.like,
          dislike: item.dislike,
          id: item.id,
          title: item.title,
          description: item.description,
          link: item.link,
        };
        updateRecipes(recipes);
      });
    }, 1000);
  }
}
```


- Para lidar com edição das receitas foi necessário usar vários recursos do input e useRef para lidar com o focus
- Auto focus essencial para garantir que o campo pode sofrer o focus
- Quando o campo perde o focus verificamos se o estado que armazena o texto mudou,caso mudou atualizamos a nossa lista
- Campo ao sofrer o focus atualizamos nosso estado que armazena o texto escrito no momento que esta no input
- Segredo e usar apenas um estado para atualizar o texto escrito no campo, usando onfocus e onblur atualizamos a lista conforme o campo recebe e perde focus.
- Toda vez que clica no botão de editar  abrimos o campo input e também damos focus no campo clicado
- Por fim a cada clique confirmando a mudança do input, atualizamos o estado com o id clicado, assim saberemos qual das receitas foi clicado

``` tsx

  function handleConfirm(state) {
    switch (state) {
      case 1:
        setEdiPhoto(false);
        refPhoto.current?.focus();
        break;
      case 2:
        setEdiTitle(false);
        refTitle.current?.focus();
        break;
      case 3:
        setEditDescription(false);
        refDescription.current?.focus();
        break;
      default:
        return;
    }
  }

  function handleStatus(state, id) {
    setSelectId(id);
    switch (state) {
      case 'photo':
        setEdiPhoto(true);
        break;
      case 'title':
        setEdiTitle(true);
        break;
      case 'description':
        setEditDescription(true);
        break;
      default:
        return;
    }
  }

function handleDescription(text) {
    setDescription(text.target.value);
  }

 function handleFocusDescription(value) {
    const getDescription = recipesUpdate.find((it) => it.id === selectId);
    if (description.length === 0) {
      setDescription(value);
    } else if (getDescription) {
      const { description } = getDescription;
      setDescription(description);
    } else {
      setDescription(value);
    }
  }

function handleBlurDescription() {
    const fieldDescription = recipes.find(
      (item) => item.id === selectId,
    ).description;
    if (description !== fieldDescription) {
      const getRecipes = recipes.filter((item) => {
        if (item.id === selectId) {
          return (item.description = description);
        }
      });
      setRecipesUpdate((old) => [...old, ...getRecipes]);
    }
  }



 <Fragment>
    <InputDescription
         ref={refDescription}
         autoFocus
         placeholder={recipes.description}
         value={
         recipe.id === selectId
         ? description
         : recipe.description
         }
         rows={7}
         onChange={(e) => handleDescription(e)}
         onBlur={() => handleBlurDescription()}
         onFocus={() =>
         handleFocusDescription(recipe.description)
          }
         maxLength={700}
        />
   <WrapSelect>
            <ContainerSelect onClick={() => handleConfirm(3)}>
                  <Select />
            </ContainerSelect>
             <TextLetter>
                          Faltam:{700 - description.length}
             </TextLetter>
            </WrapSelect>
    </Fragment>
                  ) : (
     <Fragment>
           <Description>
               {recipe.id === selectId && description.length > 0
                    ? description
                     : recipe.description}
            </Description>
                      <ContainerOption>
                        <TextOption>Editar?</TextOption>
                        <ButtonConfirmation
                          onClick={() => handleStatus('description', recipe.id)}
                        >
                      <Option select={false} />
                    </ButtonConfirmation>
                  </ContainerOption>
            </Fragment>



```





# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
