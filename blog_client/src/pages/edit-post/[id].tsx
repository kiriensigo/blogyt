import React, { ChangeEvent, FormEvent, useState } form "react";
import styles from "../..styles/Home.module.css";
import axios from "axios";
import { useRouter } from "next/router";

export async function getServerSideProps(context: any) {
    const id = context.params.id;
}