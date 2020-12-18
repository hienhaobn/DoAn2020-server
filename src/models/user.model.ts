import { Model, AllowNull, AutoIncrement, Column, NotEmpty, PrimaryKey, Table } from "sequelize-typescript";

export interface UserI {
    id?: number | null
    first_name: string
    last_name: string
    email: string
    password: string
    avartar: string
    descriptions: string
}

@Table (
    {
        tableName: "user",
        timestamps: true
    }
)
export default class User extends Model implements UserI {
    @AutoIncrement
    @PrimaryKey
    @Column
    id?: number

    @Column
    first_name: string

    @Column
    last_name!: string


    @AllowNull(false)
    @NotEmpty
    @Column
    email!: string;

    @AllowNull(false)
    @NotEmpty
    @Column
    password!: string;

    @Column
    avartar: string;
    
    @Column
    descriptions: string;

}