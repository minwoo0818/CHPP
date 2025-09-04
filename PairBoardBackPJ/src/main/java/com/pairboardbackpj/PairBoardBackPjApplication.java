package com.pairboardbackpj;

import com.pairboardbackpj.domain.Board;
import com.pairboardbackpj.domain.repository.BoardRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@RequiredArgsConstructor
public class PairBoardBackPjApplication implements CommandLineRunner {

    public static void main(String[] args) {
        SpringApplication.run(PairBoardBackPjApplication.class, args);
    }

    private final BoardRepository boardRepository;

    @Override
    public void run(String... args) throws Exception{
        boardRepository.save(Board.builder()
                        .BoardTitle("첫 번째 게시글")
                        .BoardContent("안녕하세요! 더미 데이터 첫 번째 글입니다.")
                        .Good(10)
                        .Bad(1)
                        .PictureUrl("https://example.com/img1.jpg")
                        .build());

        boardRepository.save(Board.builder()
                        .BoardTitle("두 번째 게시글")
                        .BoardContent("테스트용으로 작성한 두 번째 글입니다.")
                        .Good(5)
                        .Bad(0)
                        .PictureUrl("https://example.com/img2.jpg")
                        .build());

        boardRepository.save(Board.builder()
                        .BoardTitle("세 번째 게시글")
                        .BoardContent("오늘은 날씨가 좋네요 ☀️")
                        .Good(20)
                        .Bad(2)
                        .PictureUrl("https://example.com/img3.jpg")
                        .build());
        boardRepository.save(Board.builder()
                        .BoardTitle("네 번째 게시글")
                        .BoardContent("더미 데이터로 테스트하는 중입니다.")
                        .Good(3)
                        .Bad(0)
                        .PictureUrl("https://example.com/img4.jpg")
                        .build());
        boardRepository.save(Board.builder()
                        .BoardTitle("다섯 번째 게시글")
                        .BoardContent("마지막 테스트 게시글입니다.")
                        .Good(15)
                        .Bad(5)
                        .PictureUrl("https://example.com/img5.jpg")
                        .build());
    }

}
