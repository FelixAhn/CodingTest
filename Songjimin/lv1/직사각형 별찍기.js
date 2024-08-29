/*
	스트림의 인코딩을 설정
	utf8 인코딩을 사용하여 입력을 문자열로 처리하도록 함
*/
process.stdin.setEncoding('utf8');

/*
	process.stdin 객체가 
	data 이벤트를 감지할 때 실행될 함수를 정의함
	data 이벤트는 사용자가 입력한 데이터가 있을 때 발생함
*/
process.stdin.on('data', data => {
		/*
			사용자가 입력한 데이터를 공백을 기준으로 나누어 배열 n에 저장
			ex ) 사용자가 5 4 입력하면 n 배열은 ['5', '4']가 됨
		*/
    const n = data.split(" ");
    /*
	    배열 n의 첫 번째 요소를 정수 a로
	    두 번째 요소를 정수 b로 변환함
	    ex ) n이 ['5', '4']라면 a는 '5', b는 '4'가 됨
    */
    const a = Number(n[0]), b = Number(n[1]);
    /*
	    * 문자를 a번 반복하여 문자열 row를 만듦
	    ex ) a가 '5'라면 row -> *****가 됨
    */
    const row = '*'.repeat(a)
    
    /*
	    b번 반복하는 for 루프를 사용하여 row 문자열을 콘솔에 출력
	    즉, row가 b번 반복하여 출력됨
		  ex ) b가 '4'라면 *****가 4번 출력됨
    */
    for(let i =0; i < b; i++){
        console.log(row)
    }
});

/*
  repeat
  ➡ JS에서 문자열을 반복해서 새로운 문자열로 만들어주는 메서드‼

	시간 복잡도 분석
	1. 입력 처리 및 분리
	- data.split(" ")은 문자열을 공백으로 나누는 작업
	  문자열의 길이 N 이라고 할 때 이 작업은 0(N) 시간이 걸림
	2. 문자열 생성
	- '*'.repeat(a)는 길이 a의 문자열을 생성하는 작업
	  이 작업의 시간 복잡도는 0(a)
	3. 출력
	- console.log(row)를 b번 호출하므로
	  출력 작업의 시간 복잡도는 0(b)
	  
	전체적으로 주요 작업인 입력 처리, 문자열 생성,
	반복 출력의 복합적인 시간 복잡도
	- 입력 처리 : 0(N)
	- 문자열 생성 : 0(b)
	- 출력 : 0(b)
	따라서 코드의 전체 시간 복잡도 -> 0(N + a + b)
*/
