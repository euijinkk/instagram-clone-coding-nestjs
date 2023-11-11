import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

// Entity 붙이면 바로 테이블로 생성된다.
@Entity()
export class PostsModel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  author: string;

  @Column()
  title: string;

  @Column()
  content: string;

  @Column()
  likeCount: number;

  @Column()
  commentCount: number;
}
