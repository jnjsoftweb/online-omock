## Project 폴더 생성

### OLW
`C:\JnJ\Developments\_Playground\online-omock`

## PRD 생성

- `C:\JnJ\Developments\_Playground\online-omock\_docs\ai\genspark.md`

## github 저장소 생성

```sh
cd C:\JnJ\Developments\_Playground

xgit -e make -n online-omock -u jnjsoftweb -d "online-omock in nextjs"
```

## task-master-ai

```sh
npm install -g task-master-ai

cd C:\JnJ\Developments\_Playground\online-omock
task-master init

Add shell aliases for task-master? This lets you type "tm" instead of "task-master" (Y/n): y
```

## prd 업데이트

### cursor.ai
```
`C:\JnJ\Developments\_Playground\online-omock\scripts\example_prd.txt` 의 형식을 참고하고, `C:\JnJ\Developments\_Playground\online-omock\_docs\Planning\PRD.md` 의 내용을 참고하여, `C:\JnJ\Developments\_Playground\online-omock\scripts\prd.txt` 파일을 만들어주세요.
```

### mcp 설정

#### task-master-ai

> `C:\JnJ\Developments\_Playground\online-omock\.cursor\mcp.json`

```json
"ANTHROPIC_API_KEY": "sk-ant-api.....",
"PERPLEXITY_API_KEY": "pplx-....",
```

- > Cursor Settings > MCP > 'task-master-ai' 활성화

#### sqlite-mcp

https://smithery.ai/server/mcp-server-sqlite-npx

databasePath: `C:\JnJ\Developments\_Playground\online-omock\sqlite\db.sqlite`

> `C:\JnJ\Developments\_Playground\online-omock\.cursor\mcp.json`

```json
    "mcp-server-sqlite-npx": {
      "command": "npx",
      "args": [
        "-y",
        "@smithery/cli@latest",
        "run",
        "mcp-server-sqlite-npx",
        "--key",
        "b7e27284-2c11-460a-97e3-b0988337e0b8",
        "--profile",
        "liberal-orca-Os0OPD"
      ]
    }
```

## task 생성

### cursor.ai

```
`prd.txt`
@prd.txt을 task master를 사용해서 파싱해서 작업 목록을 생성해줘.
```

```
@tasks 폴더에 있는 task 파일들에서 Status, Priority를 제외하고는 값들을 모두 한글로 변경해주세요.
`C:\JnJ\Developments\_Playground\online-omock\tasks\tasks.json` 도 동일하게 변경해주세요.
```

### task 확인

> claude 비용 확인: `https://console.anthropic.com/settings/cost` 

```sh
# 명령어 보기
task-master

# task 목록 보기
task-master list
```


```sh
# 복잡도(난이도) 분석
task-master analyze-complexity
tm analyze-complexity

# 난이도 분석 보고서
task-master complexity-report

# 난이도 분석 보고서 저장
task-master complexity-report > "C:\JnJ\Developments\_Playground\online-omock\_docs\tasks\analyze-complexity.txt"
```

### task 확장

> cursor.ai

```
task-complexity-report 를 참고해서 복잡도가 높은 작업을 subtask로 확장해줘.
```

```sh
task-master list --with-subtasks
```

### task 조정

> cursor.ai
```
현재 전체적인 작업 목록에서 MVP 개발에 필요한 부분만 먼저 개발하고 싶어.
MVP 개발에 불필요한 작업들은 나중에 처리할 작업으로 변경해줘.
```

```
20도 MVP 이후로 연기해줘
```

```sh
task-master list --with-subtasks
```